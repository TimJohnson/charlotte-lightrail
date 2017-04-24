import React, { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'

import faqContent from './faqContent'
import { COLORS } from '../../assets/styles/constants'
import { aboutStyles } from '../../assets/styles/aboutStyles'
const styles = StyleSheet.create(aboutStyles)

export default class Faq extends React.Component {

  constructor (props) {
    super(props)
    this.renderHeader = this.renderHeader.bind(this)
    this.toggleArrow = this.toggleArrow.bind(this)
    // Set initial animation values for each accordion section...
    const arrowAnimationValues = {}
    const faqSections = faqContent(styles)
    faqSections.forEach((sec, index) => {
      arrowAnimationValues[`arrowBounce${index}`] = new Animated.Value(45)
    })
    arrowAnimationValues.arrowBounce0 = new Animated.Value(135)
    // and set initial state.
    this.state = {
      ...arrowAnimationValues,
      openIndex: 0
    }
  }

  renderHeader (section, index, isOpen) {
    const bounce = this.state[`arrowBounce${index}`]
    return (
      <View style={styles.accordionHeader}>
        <View style={{ flex: 1 }}>
          <Text allowFontScaling={false} style={styles.bold}>{section.title}</Text>
        </View>
        <Animated.View style={[styles.arrow, {
          transform: [{
            rotate: bounce.interpolate({
              inputRange: [0, 360],
              outputRange: ['0deg', '360deg']
            })
          }]
        }]} />
      </View>
    )
  }

  renderContent (section) {
    return (
      <View style={styles.accordionContent}>
        {section.contents}
      </View>
    )
  }

  toggleArrow (openIndex) {
    const prevOpenIndex = this.state.openIndex
    // Change previously open toggle arrow back to point right (whether opening new toggle or closing)
    Animated.spring(this.state[`arrowBounce${prevOpenIndex}`], { toValue: 45 }).start()
    if (openIndex !== false) { // If user is not closing a toggle
      // Change newly open toggle arrow to point down
      Animated.spring(this.state[`arrowBounce${openIndex}`], { toValue: 135 }).start()
      this.setState({ openIndex }) // Set our openIndex
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.accordionWrapper}>
          <Accordion
            initiallyActiveSection={0}
            onChange={this.toggleArrow}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            sections={faqContent(styles)}
            underlayColor={COLORS.backgroundColorTrans}
          />
        </View>
      </ScrollView>
    )
  }
}
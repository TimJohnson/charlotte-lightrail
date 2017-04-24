import { blueStops } from './config';
import { getNextTrainTime } from './scheduleCalcs';


export const getAnnotations = () =>
  blueStops.map((stop, index) => ({
    coordinates: [stop.latlng.latitude, stop.latlng.longitude],
    type: 'point',
    title: stop.mapLabel,
    annotationImage: {
      source: {
        uri: 'bluemarker',
      },
      height: 32,
      width: 32,
    },
    id: `marker-${index}`,
  }));

export const getStopCallouts = () => {
  const stopCallouts = {};
  blueStops.forEach((stop, index) => {
    const nextInbound = getNextTrainTime('inbound', index);
    const nextOutbound = getNextTrainTime('outbound', index);
    stopCallouts[`stopCallout${index}`] = {
      durationText: null,
      inbound: nextInbound,
      outbound: nextOutbound,
    };
  });
  return stopCallouts;
};

export const blueLine = [
  [35.1071072084213, -80.88274493478862],
  [35.11281207790962, -80.88371053012516],
  [35.11620847975965, -80.8834959533837],
  [35.12499283144439, -80.87889328227942],
  [35.12823078006564, -80.87704792230286],
  [35.12877481300133, -80.8765973111458],
  [35.13064380168687, -80.8759213944102],
  [35.13191609338824, -80.87572827534288],
  [35.13893527640222, -80.87685480323556],
  [35.13998810165949, -80.8769084474209],
  [35.14073384464492, -80.87725177020725],
  [35.14630476724896, -80.87847485763356],
  [35.15572621570436, -80.8768011590502],
  [35.15829630972654, -80.87692990509507],
  [35.16793563174688, -80.87751999113408],
  [35.17142620543254, -80.87793841577991],
  [35.17787197149588, -80.87948336831843],
  [35.17916106338081, -80.87947263948135],
  [35.1809412042798, -80.87916150320623],
  [35.18522039825676, -80.87800278880235],
  [35.1869302590751, -80.87721958369602],
  [35.19589986250858, -80.87211265724929],
  [35.19689934643547, -80.87131872330588],
  [35.19961147702468, -80.86871680985416],
  [35.2031708238481, -80.86632427918687],
  [35.20945628440922, -80.86100277599868],
  [35.20964607146928, -80.86089029367096],
  [35.21358189792325, -80.8577360155715],
  [35.21666430519905, -80.85388804435898],
  [35.22095914699968, -80.8476438611825],
  [35.22163403004883, -80.84628129887426],
  [35.22437157036239, -80.84209337111913],
  [35.2273621965736, -80.838079946956244],
];

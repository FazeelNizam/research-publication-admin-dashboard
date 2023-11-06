import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import { calender } from '../data/chartData'

const Calender = () => {
  return (
    <ResponsiveCalendar
      data={calender}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: '#e0e0e0',
            },
          },
          legend: {
            text: {
              fill: '#e0e0e0',
            },
          },
          ticks: {
            line: {
              stroke: '#e0e0e0',
              strokeWidth: 1,
            },
            text: {
              fill: '#e0e0e0',
            },
          },
        },
        legends: {
          text: {
            fill: '#e0e0e0',
          },
        },
        tooltip: {
          container: {
            color: '#141b2d',
          },
        },
      }}
      from="2016-01-01"
      to="2016-12-31"
      emptyColor="#f0f0f0"
      colors={['#32de84', '#17B169', '#00AB66', '#008200']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  )
}

export default Calender

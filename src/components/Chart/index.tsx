import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-react-charts';

import 'hammerjs';
import IChartDataItem from '../../interfaces/IChartDataItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pointColor = (point: any) => {
  if (point.value >= 0) {
    return 'green';
  } else {
    return 'blue';
  }
};

export interface IChartContainer {
  data: Array<IChartDataItem>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelContent = (e: any) => `${e.value.toFixed(0)} °C`;

const ChartContainer = (props: IChartContainer): JSX.Element => {
  const { data } = props;
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return (
    <>
      {!data ? null : (
        <Box style={{ height: 'fit-context', overflow: 'visible' }}>
          <Chart style={{ height: 'fit-context', width: '100%', overflow: 'visible' }}>
            <ChartSeries>
              <ChartSeriesItem
                type="line"
                data={data}
                color={pointColor}
                field="temp"
                categoryField="time"
                highField="fit-context"
                autoFit={true}
                margin={10}
                style="normal"
                noteTextField="time"
              >
                <ChartSeriesLabels color="black" position="left" content={labelContent} />
              </ChartSeriesItem>
            </ChartSeries>

            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                title={{ text: 'Time', color: 'grey' }}
                categories={categories}
                baseUnit="hours"
                visible={true}
                labels={{ rotation: 60, color: 'grey' }}
                line={{ color: 'grey', visible: true }}
              />
            </ChartCategoryAxis>
          </Chart>
        </Box>
      )}
    </>
  );
};

export default ChartContainer;

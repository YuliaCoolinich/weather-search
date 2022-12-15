import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartSeriesItemTooltip,
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
  return (
    <>
      {!data ? null : (
        <Box style={{ height: '300px' }}>
          <Chart style={{ height: '300px', width: '100%', marginTop: '50px' }}>
            <ChartSeries>
              <ChartSeriesItem
                type="line"
                data={data}
                color={pointColor}
                field="temp"
                categoryField="time"
                highField="100px"
              >
                <ChartSeriesLabels color="black" position="above" content={labelContent} />
                <ChartSeriesItemTooltip color="black" />
              </ChartSeriesItem>
            </ChartSeries>

            <ChartCategoryAxis>
              <ChartCategoryAxisItem title={{ text: 'Time', color: 'black' }} />
            </ChartCategoryAxis>
          </Chart>
        </Box>
      )}
    </>
  );
};

export default ChartContainer;

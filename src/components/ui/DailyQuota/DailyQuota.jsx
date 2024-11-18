import React from 'react';
import { Box, Tooltip } from '@mui/material';

import ProgressWithLabel from './ProgressWithLabel/ProgressWithLabel';

import './DailyQuota.css';

const DailyQuota = ({ value }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(Math.round(value / 5))
  }, [value])

  return (
    <Box sx={{ mt: { xs: 2, md: 0 }, cursor: "default" }}>
      <Tooltip
        title="dailyQuota">
        <div>
          <ProgressWithLabel
            className="daily-quota" variant="determinate" value={progress} />
        </div>
      </Tooltip>
    </Box>
  )
};

export default DailyQuota;
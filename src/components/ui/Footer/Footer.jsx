import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetQuotaInfoQuery } from '../../../services/kinopoiskApi';
import { switchDailyQuotaStatus } from '../../../redux/slices/querySlice';
import { Stack, Typography, Divider, Link } from '@mui/material';
import { theme } from '../../../theme';

import DailyQuota from '../DailyQuota/DailyQuota';

const Footer = () => {
  const dispatch = useDispatch()
  const { data } = useGetQuotaInfoQuery()

  React.useEffect(() => {
    if (data && data.dailyQuota.used > 500) {
      dispatch(switchDailyQuotaStatus(true))
    }
  }, [data, dispatch])

  return (
    <Stack
      sx={{ mt: "auto" }}
      component="footer">
      <Divider
        sx={{ bgcolor: theme.white }}
        variant="fullWidth"
        orientation="horizontal"
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: { sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px"
        }}>

        <Typography sx={{ color: theme.white }}>
          {new Date().getFullYear()}«ywy.no»
        </Typography>

        <DailyQuota value={data && data.dailyQuota.used} />

        <Link
          target="_blank"
          sx={{ color: theme.white, textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}
          href="https://github.com/TwiDef">
          <Typography sx={{ color: theme.white }}>TwiDef</Typography>
          <img
            width={30}
            src="https://cdn-icons-png.flaticon.com/512/11104/11104255.png"
            alt="github-link" />
        </Link>

      </Stack>
    </Stack >
  );
};

export default Footer;
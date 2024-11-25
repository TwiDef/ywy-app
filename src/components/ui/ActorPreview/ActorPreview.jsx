import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import BackButton from '../BackButton';

import styles from './ActorPreview.module.css';

const ActorPreview = ({ data }) => {
  return (
    <Box sx={{ pt: 2 }}>
      <BackButton />
      <Stack sx={{
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        gap: { xs: 2, md: 4 },
        flexWrap: { xs: "wrap", md: "unset" },
        justifyContent: "center",
        width: "100%",
        pt: 2, pb: 5
      }}>
        <Stack sx={{ alignItems: "center", gap: 3 }}>
          <img height={570} width={360} src={data && data.posterUrl}
            alt={data && (data.nameRu ? data.nameRu : data.nameEn)} />
          <Button
            href={data && data.webUrl}
            target="_black"
            sx={{
              transition: ".1s ease-in-out",
              "&:hover": { scale: 1.1 },
              fontSize: "16px",
              bgcolor: theme.pale_purple,
              color: theme.dark_main,
              fontWeight: "bold"
            }} size="small" variant="contained">смотреть на kinopoisk</Button>
        </Stack>
        <Stack sx={{ color: theme.white, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              lineHeight: 1,
              textAlign: { xs: "center", md: "unset" },
              fontSize: { xs: "1.7rem", md: "2.6rem" },
              textShadow: `3px 3px 3px ${theme.black}`
            }}
          >{data && data.nameRu}
          </Typography>
          <Stack sx={{ flexDirection: "column", pt: 2, justifyContent: "center", gap: 2 }}>

            {data.profession &&
              <Box>
                <Typography sx={{ fontSize: 22, lineHeight: 1.3 }}>
                  <span style={{ color: theme.pale_purple }}>Карьера:</span>
                  <br />
                  {data && data.profession}
                </Typography>
              </Box>}

            {data.birthday &&
              <Box>
                <Typography sx={{ fontSize: 22, lineHeight: 1.3 }}>
                  <span style={{ color: theme.pale_purple }}>Дата рождения:</span>
                  <br />
                  {data && data.birthday}
                </Typography>
              </Box>}

            {data.birthplace &&
              <Box>
                <Typography sx={{ fontSize: 22, lineHeight: 1.3 }}>
                  <span style={{ color: theme.pale_purple }}>Место рождения:</span>
                  <br />
                  {data && data.birthplace}
                </Typography>
              </Box>}

            {data.facts.length > 0 &&
              <Box className={styles.facts}>
                <Typography sx={{ fontSize: 22, lineHeight: 1.3 }}>
                  <span style={{ color: theme.pale_purple }}>Интересные факты:</span>
                  <br />
                </Typography>
                <ul style={{ margin: 0, padding: 0 }}>
                  {data && (data.facts).map((fact, i) => {
                    return <li key={i}>{fact}</li>
                  })}
                </ul>
              </Box>}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ActorPreview;
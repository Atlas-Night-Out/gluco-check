import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import { JOIN_BETA } from "../lib/constants";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  subtitle: {},
  button: {
    fontWeight: 600,
  },
}));

function Banner() {
  const { t, i18n } = useTranslation();

  // TODO: can't we just get this straight from i18n?
  const currentLngName = t(
    `languageSelector.availableLanguageLabels.${i18n.language}`
  );

  const classes = useStyles();

  function joinBeta() {
    window.location.assign(`${JOIN_BETA}/${i18n.language}`);
  }

  return (
    <>
      <Paper elevation={1}>
        <Container maxWidth="md">
          <Box pt={2} pr={1} pb={1} pl={2}>
            <Grid container spacing={2} alignItems="flex-start" wrap="nowrap">
              <Grid item>
                <Info color="secondary" />
              </Grid>
              <Grid item>
                <Typography className={classes.title} color="secondary">
                  {t("settings.betaBanner.title")}
                </Typography>
                <Typography className={classes.subtitle}>
                  {t("settings.betaBanner.message", {
                    language: currentLngName,
                  })}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="flex-end" spacing={8}>
              <Grid item>
                <Button
                  className={classes.button}
                  color="secondary"
                  onClick={() => joinBeta()}
                >
                  {t("settings.betaBanner.action")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
      <Divider />
    </>
  );
}

export default Banner;

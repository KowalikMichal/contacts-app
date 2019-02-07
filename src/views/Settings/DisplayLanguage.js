import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

//lanuages
import { withI18n } from "react-i18next";

const languageList = [
  { value: 'en', text: 'English' },
  { value: 'pl', text: 'Polski' },
];

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3vh"
  },
  formControl: {
    width: "100%"
  }
});


class DisplayLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: props.i18n.languages[0].substring(0, 2) || "en"
    };
    if (!languageList.find(language => language.value === this.state.language)) {
      this.state.language = "en"
    }
  }

  render() {
    const { classes, t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      this.setState({ language: lng });
    };

    return (
      <>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
            changeLanguage(this.state.language);
          }}
        >
          <FormControl className={classes.formControl}>
            <Typography variant="h6" gutterBottom>
              {t("DisplayLanguage")}
            </Typography>

            <Select
              value={this.state.language}
              onChange={e => {
                this.setState({ language: e.target.value });
              }}
              input={<Input name="language-input" id="language" />}
              name="language"
            >
              {
                languageList.map((element, index) => {
                  return <MenuItem value={element.value} key={index}>{element.text}</MenuItem>
                })
              }
            </Select>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                OK
              </Button>
            </div>
          </FormControl>
        </form>
      </>
    );
  }
}

const styled = withStyles(styles)(DisplayLanguage);
const language = withI18n()(styled);

export default language;
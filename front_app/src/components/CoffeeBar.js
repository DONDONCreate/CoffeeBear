import React from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const SliderExampleDisabled = () => (
  <MuiThemeProvider>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <div>
            <Slider disabled={true} value={0.5} />
        </div>
        <TextField
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true}
            rows={2}
        />
    </MuiThemeProvider>
);

export default SliderExampleDisabled;


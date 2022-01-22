import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import '../style/GameKeyboard.css';

function GameKeyboard(props) {
    const handleChange = (input) => {
      props.handleInput(input);
      console.log("Input changed: ", input);
    }
  
    const handleKeyPress = (button) => {
      // handle attempted word submission
      if (button === "{enter}") { 
        if (props.handleSubmission()) {
          keyboard.current.clearInput();
        }
      }
      console.log("Button pressed: ", button);
    }
  
    return (
      <div className='game-keyboard'>
        <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={"default"}
            theme='hg-theme-default wordle-keyboard'
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            layout={{
              default: ["q w e r t y u i o p", "a s d f g h j k l", "{enter} z x c v b n m {bksp}"],
            }}
            display={{
              '{bksp}': "\u232B",
              '{enter}': "enter"
            }}
            maxLength={props.maxInputLength}
        />
      </div>
    );
}

export default GameKeyboard;
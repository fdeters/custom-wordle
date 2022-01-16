import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function GameKeyboard(props) {
    const handleChange = (input) => {
      props.handleInput(input);
      console.log("Input changed: ", input);
    }
  
    const handleKeyPress = (button) => {
      console.log("Button pressed: ", button);
    }
  
    return (
      <div className='game-keyboard'>
        <Keyboard
            layoutName={"default"}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            layout={{
              default: ["q w e r t y u i o p", "a s d f g h j k l", "{enter} z x c v b n m {bksp}"],
            }}
            display={{
              '{bksp}': "\u232B",
              '{enter}': "enter"
            }}
            maxLength={5}
        />
      </div>
    );
}

export default GameKeyboard;
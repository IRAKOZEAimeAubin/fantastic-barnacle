import Tag from './Tag'
import InfiniteLoopSlider from './InfiniteLoopSlider'
import './App.scss'

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['Naruto', 'Kimetsu No Yaiba', 'Jujutsu Kaisen', 'One Piece', 'Boku No Hero Academia', 'Avatar: The Last Airbender', 'Fullmetal Alchemist: Brotherhood', 'One Punch Man', 'Mob Psycho', 'Bleach', 'Dragon Ball', 'Baki', 'Black Lagoon', 'Shinjeki No Kyojin'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = ( min, max ) => Math.floor( Math.random() * ( max - min ) ) + min
const shuffle = ( arr ) => [ ...arr ].sort( () => .5 - Math.random() )

function App() {
  return (
    <div className="app">
      <header>
        <h1>Infinite Scroll Animation</h1>
        <p>vitejs, react, css, bi-directional, customizable, content independent</p>
      </header>
      <div className="tag-list">
        { [ ...new Array( ROWS ) ].map( ( _, i ) => (
          <InfiniteLoopSlider key={ i } duration={ random( DURATION - 5000, DURATION + 5000 ) } reverse={ i % 2 }>
            { shuffle( TAGS ).slice( 0, TAGS_PER_ROW ).map( tag => (
              <Tag text={ tag } key={ tag } />
            ))}
          </InfiniteLoopSlider>
        ) ) }
        <div className="fade" />
      </div>
    </div>
  )
}

export default App

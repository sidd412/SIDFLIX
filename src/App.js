import './App.css';
import Main from './TodoCompo/Main'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import CourseGoalItem from './components2/CourseGoals/CourseGoalItem/CourseGoalItem'
import  CourseInput from './components2/CourseGoals/CourseInput/CourseInput'
import CourseGoalList from './components2/CourseGoals/CourseGoalList/CourseGoalList'

function App() {
  return (
   <>
  
   <CourseInput/>
   <CourseGoalItem/>
   {/* <CourseGoalList/> */}
   </>
  );
}

export default App; 

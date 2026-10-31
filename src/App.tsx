import './App.css'
import Certifications from './Certifications'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

export default function App() {
	return (
		<div className='flex flex-col items-center'>
			<Navbar/>
			<Header/>
			<Projects/>
			<Skills/>
			<Certifications/>
			<Contact/>
			<Footer/>
		</div>
	)
}

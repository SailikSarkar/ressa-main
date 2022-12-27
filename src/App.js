import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/home/ThemeContext'
import Hero1 from './components/home/Hero';
import Navbar1 from './components/navbar/navbar';
import Pricing1 from './components/pricing/Pricing';
import Company1 from './components/company/Company';
import Company2 from './components/company/Company2';
import News1 from './components/contact/newsletter';
import Work1 from './components/work/work';
import Team1 from './components/team/team';
import Footer1 from './components/footer/footer';
import ContactForm from './components/contact/contact-form';









function App() {
  return (
   
    <ThemeProvider>
      
{/* <div className=' absolute'> 
<Navbar1/>

</div> */}
  <Hero1/>
  <Company1/>
  <Pricing1/>
  <Company2/>
  <News1/>
  <Work1/>
  <Team1/>
  <ContactForm/>
  <Footer1/>







  </ThemeProvider>

     
  );
}

export default App;

import React,{useEffect} from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import AboutUs from './AboutUs'
import { useTranslation } from 'react-i18next'
import MadarsaDetail from '../Component/MadarsaDetail'

const AboutUsPage = () => {

    const {i18n} = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if(savedLanguage){
            i18n.changeLanguage(savedLanguage);
        }
    },[i18n])
  return (
    <>
    <Header/>
    <AboutUs/>
    <MadarsaDetail/>
    <Footer/>
    </>
  )
}

export default AboutUsPage
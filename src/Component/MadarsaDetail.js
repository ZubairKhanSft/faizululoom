import React from 'react'
import { Box,Typography,Container,Grid,Paper } from '@mui/material'
import { useTranslation } from 'react-i18next';


// Add Global Keyframes for Fade In Animation
const styles = {
    '@keyframes fadeIn': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  };
const MadarsaDetail = () => {
    const {t} = useTranslation();
  return (
    <>
     <Box
      sx={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeIn 1.5s ease-in-out',
        ...styles,
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={4} sx={{ padding: '2rem', backgroundColor: '#ffffff' }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#005587',
                  fontFamily: 'Georgia, serif',
                  animation: 'fadeIn 2s ease-out',
                }}
              >
                شہر سیونی و گردوپیش
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: '2',
                  textAlign: 'justify',
                  color: '#333',
                  fontSize: '1.1rem',
                  fontFamily: 'Urdu Nastaliq, serif',
                  animation: 'fadeIn 2.2s ease-out',
                }}
              >
                {t('seoniText2')}
                {/* شہر سیونی صوبہ مدھیہ پردیش کا ایک شہر و ضلع ہے۔ روڈ ویز وریلوےلائن سیونی سے بھوپال کو جوڑتی ہے۔
                ناگپور (مہاراشڑ) سے نیشنل ہائی وے نمبر ۷ سیونی سے ہوتے ہوئے جبلپور شہر کو جاتا ہے۔
                ناگپور۔۔۔سیونی۔۔۔جبلپور، ناگپور سے سیونی کا فاصلہ ۱۲۷ کلو میٹر اور سیونی سے جبلپور کا فاصلہ
                ۱۴۵ کلو میٹر ہے۔ ناگپور میں انٹرنیشنل ایرپورٹ بھی واقع ہے۔ سیونی ضلع کی کل آبادی میں سے تقریبا ۳۰
                فیصد مسلم آبادی ہے۔ یہ ضلع تعلیمی میدان میں انتہا ئی پسماندہ ہے بھولے بھالے سیدھے سادھے لوگ آباد ہیں۔
                شہر سیونی، و سیونی علاقے میں صنعت و حِرفت کالعدم ہے۔ */}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginTop: '1.5rem',
                  lineHeight: '2',
                  textAlign: 'justify',
                  color: '#333',
                  fontSize: '1.1rem',
                  fontFamily: 'Urdu Nastaliq, serif',
                  animation: 'fadeIn 2.4s ease-out',
                }}
              >
                {t('seoniText3')}

                {/* مسلمانوں کی اکثریت کام چلاؤ کاشتکاری کرتی ہے۔ تھوڑے بہت لوگ مختلف تجارت و کاروبار کرتے ہیں۔ جس کے
                باعث یہاں مسلم اکثریت مالی اعتبار سے بے انتہا کمزور ہے اور اس مالی پس ماندگی کے اثرات تعلیمی میدان
                پر زیادہ ہیں۔ بچے بچیوں کی کثیر تعداد لا علمی کا شکار ہے۔ اسی طرح مذہبی تعلیم کی بھی کمی ہے۔ سیونی کے
                قرب وجوار کے علاقے میں مسلمانوں کی خاصی تعداد موجود ہونے کے باوجود مسلمان دینی و دنیاوی دونوں
                تعلیم میں بہت پچھڑے ہوئے ہیں۔ */}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginTop: '1.5rem',
                  lineHeight: '2',
                  textAlign: 'justify',
                  color: '#333',
                  fontSize: '1.1rem',
                  fontFamily: 'Urdu Nastaliq, serif',
                  animation: 'fadeIn 2.6s ease-out',
                }}
              >
                {t('seoniText3')}
                
                {/* دین کی ابتدائی تعلیم جو مکتب کی شکل میں دی جاتی ہے اور جو ہر مسلم بچے و بچی کے لئے ضروری و لازم ہے اس
                کا تعلیمی معیار انتہائی ناقص ہے بلکہ بعض مسلم آبادی کے گاؤں میں سرے سے اس کا انتظام ہی ندارد ہے۔
                تاہم سیونی مسلمانوں کے لئے تاریخی حیثیت اور تعلیمی و تبلیغی ضرورت کے پیش نظر خاصی اہمیت کا حامل ہے۔
              */}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginTop: '1.5rem',
                  lineHeight: '2',
                  textAlign: 'justify',
                  color: '#333',
                  fontSize: '1.1rem',
                  fontFamily: 'Urdu Nastaliq, serif',
                  animation: 'fadeIn 2.8s ease-out',
                }}
              >
                {t('seoniText4')}
                
                {/* مدرسہ فیض العلوم اس علاقے کے لئے ہی نہیں بلکہ پورے مدھیہ پردیش کے لئے مرکزی حیثیت رکھتا ہے۔
                یہاں کے حالات امید افزا ہیں۔ وسط ہند بالخصوص علاقہ سیونی میں تبلیغ اسلام کے مواقع دوسرے صوبوں کے
                بنسبت زیادہ ہیں اور یہ علاقہ اسلامی مقبولیت کے لئے زیادہ زرخیز بھی ہے۔ */}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  marginTop: '1.5rem',
                  lineHeight: '2',
                  textAlign: 'justify',
                  color: '#333',
                  fontSize: '1.1rem',
                  fontFamily: 'Urdu Nastaliq, serif',
                  animation: 'fadeIn 3s ease-out',
                }}
              >
                {t('seoniText5')}

                {/* سرِ فہرست علماء کرام میں حضرت مولانا ابومحمد ابراہیم آروی المتوفی ۱۳۱۹ھ، مولانا احمد سعید سہارنپوری،
                مولانا صدیق حسن بہاری، مولانا محمد یاسین کانپوری رحمہم اللہ ہیں۔ یہ دور اول کے علماء کرام کا ذکر ہے
                جو آزادی سے پہلے اور آزادی کے حصول کے فوری بعد کے زمانے کا ہے۔ */}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
    
    </>
  )
}

export default MadarsaDetail
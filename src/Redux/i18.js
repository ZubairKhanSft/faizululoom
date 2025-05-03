//import i18next from "i18next";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

const saveLanguage = localStorage.getItem('language') || 'ar';
const goals = [
  'Improve the quality of higher education.',
  'Place students in student-centered learning environment that promotes economic and social development, with the aim to provide them with leadership skills and engage them in society service.',
  'Promote innovation and the pursuit of excellence in teaching and learning.',
  'Adopt modern teaching methods such as classroom learning, distance learning, e-learning, mobile learning, and lifelong self-learning.',
  'Apply universally recognized systems to ensure the quality of education and academic accreditation, both at the administrative and academic levels, and to compete with Arab and international universities.'
];
i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          to: "To",
          madarsa: "Madarsa Faizul Uloom, Seoni",
          intro1: "At Madarsa Faizul Uloom, we are committed to nurturing minds and hearts with a balanced curriculum that includes both traditional Islamic teachings and modern academic subjects. Our goal is to empower individuals and uplift entire communities through education.",
          intro2: "We offer various courses designed to cater to the needs of our students, ensuring that education is affordable and attainable for everyone, including those from underprivileged backgrounds. Our programs include a range of subjects to provide a comprehensive education that prepares students for both religious and worldly success.",
          join: "Join us at Madarsa Faizul Uloom and be a part of a vibrant learning community where education meets values and tradition.",
          topReason:"Top Reasons To Study at Madarsa Faizul Uloom",
          topReasonBody:"We would like to remind you of some of the many benefits of studying at Madarsa Faizul Uloom",
          Authenticity:'Authenticity',
          AuthenticityBody:'Our curriculum is based on correct and authentic knowledge based on the Quran and Sunnah.',
          Affordability:'Affordability',
          AffordabilityBody:'Fees are comparatively low and affordable for a degree program.',
          Accessibility:'Accessibility',
          AccessibilityBody:'You can study online from anywhere in the world.',
          Community:'Community',
          CommunityBody:'You can be part of a community of Muslim students from across all over the India.',
          About:'About Madarsa Faiz-Ul-Uloom' ,
          AboutStart:' Started in 1965 with a humble beginning of just a few rooms, Madarsa Faizul Uloom was the dream of a few good men who wanted to provide the students the best education of both the worlds.',
          AboutBody1:'The students of the Madarsa are taught with guiding principles of Quran and Sunnah. They are also equipped with subjects of modern education like Mathematics, Sciences, and Languages. The alumni are also trained in vocational trades, crafts, and professional arts. Since the inception of the Madrasa, it has been our endeavor to transform the young students into honorable human beings who can take charge of any role in any walk of life and become a beacon for the Deen-e-Islam.',
          VisionBody:'The Madarsa Faiz-Ul-Uloom is committed to empowering students to become full citizens responsible for playing an active role in their communities. We advocate for quality education, the excellence of research, and innovative teaching methods. Our university embraces values, humanity, and tolerance to enable graduates to serve their community with knowledge and virtues developed within.',
          goal1: "Improve the quality of higher education.",
          goal2: "Place students in student-centered learning environment that promotes economic and social development, with the aim to provide them with leadership skills and engage them in society service.",
          goal3: "Promote innovation and the pursuit of excellence in teaching and learning.",
          goal4: "Adopt modern teaching methods such as classroom learning, distance learning, e-learning, mobile learning, and lifelong self-learning.",
          goal5: "Apply universally recognized systems to ensure the quality of education and academic accreditation, both at the administrative and academic levels, and to compete with Arab and international universities.",
         Strength:'Madarsa Strength',
         strengthbody:'The Madarsa Faiz Ul Uloom Seoni propagates human values and forbearance to fulfill the ideology and dream of its founders.',
         seoniText1: "Shahr Seoni is a city and district in the state of Madhya Pradesh. Roadways and railways connect Seoni to Bhopal. National Highway 7 connects Nagpur (Maharashtra) to Jabalpur via Seoni. The distance from Nagpur to Seoni is 127 km, and from Seoni to Jabalpur is 145 km. Nagpur also has an international airport. Approximately 30% of Seoni's population is Muslim. The district is highly underdeveloped in education, and the population is mostly simple and modest.",
         seoniText2: "Most Muslims rely on subsistence farming. Some are engaged in trade and small businesses, but the majority are financially weak. This financial weakness has had a strong impact on education, leaving many children without access to basic knowledge. Additionally, there is a significant lack of religious education.",
         seoniText3: "Despite the presence of a considerable Muslim population in Seoni and its surrounding areas, both religious and secular education are lacking. The standard of Islamic education provided in local maktabs (primary religious schools) is poor, and in some villages, it is nonexistent.",
         seoniText4: "Madarsa Faizul Uloom holds a central position in the region of Seoni and the entire state of Madhya Pradesh for educational and religious activities. It is the area's beacon of hope, striving to raise educational standards.",
         seoniText5: "Prominent scholars who have served in Seoni include Hazrat Maulana Abu Muhammad Ibrahim Arvi, Maulana Ahmed Saeed Saharanpuri, Maulana Sadiq Hasan Bahari, and Maulana Muhammad Yasin Kanpuri, among others. These scholars played a significant role in spreading education and Islam in the region."
     
        },
        contact: {
                  callUs: {
                    title: "Call Us",
                    details: ["(7770) 123 4567", "(7770) 123 4567"]
                  },
                  mailUs: {
                    title: "Mail Us",
                    details: ["madarsafaizululoomseoni@gmail.com"]
                  },
                  openingHours: {
                    title: "Opening Hours",
                    details: ["Mon - Fri : 10am to 4pm", "Sat - Sun : Closed"]
                  },
                  address: {
                    title: "Address",
                    details: ["Janta Nagar, Dorli Chatarpur,", "Seoni, Bordai, Madhya Pradesh 480661"]
                  }
                }
      },
      ur: {
        translation: {
          welcome: "خوش آمدید",
          to: "کو",
          madarsa: "مدرسہ فیض العلوم، سیونی",
          intro1: "مدرسہ فیض العلوم میں ہم اسلامی تعلیمات اور جدید تعلیمی مضامین کے متوازن نصاب کے ذریعے ذہنوں اور دلوں کو تربیت دینے کے لیے پرعزم ہیں۔ ہمارا مقصد تعلیم کے ذریعے افراد کو بااختیار بنانا اور پوری کمیونٹیز کو ترقی دینا ہے۔",
          intro2: "ہم مختلف کورسز پیش کرتے ہیں جو ہمارے طلباء کی ضروریات کو پورا کرنے کے لیے تیار کیے گئے ہیں، یہ یقینی بناتے ہوئے کہ تعلیم ہر ایک کے لیے سستی اور قابل رسائی ہو، بشمول ان کے جو پسماندہ پس منظر سے آتے ہیں۔ ہمارے پروگرام وسیع مضامین کا احاطہ کرتے ہیں تاکہ ایک جامع تعلیم فراہم کی جا سکے۔",
          join: "مدرسہ فیض العلوم میں ہمارے ساتھ شامل ہوں اور ایک متحرک تعلیمی کمیونٹی کا حصہ بنیں جہاں تعلیم روایات اور اقدار سے ملتی ہے۔",
          topReason:"مدرسہ فیض العلوم میں پڑھنے کی اہم وجوہات",
          topReasonBody:"ہم آپ کو مدرسہ فیض العلوم میں پڑھنے کے بہت سے فوائد میں سے کچھ یاد دلانا چاہتے ہیں۔",
          Authenticity:'صداقت',
          AuthenticityBody:'ہمارا نصاب قرآن و سنت پر مبنی صحیح اور مستند علم پر مبنی ہے۔',
          Affordability:'استطاعت',
          AffordabilityBody:'ڈگری پروگرام کے لیے فیس نسبتاً کم اور سستی ہے۔',
          Accessibility:"رسائی",
          AccessibilityBody:'آپ دنیا میں کہیں سے بھی آن لائن تعلیم حاصل کر سکتے ہیں۔',
          Community:'برادری',
          CommunityBody:'آپ پورے ہندوستان کے مسلم طلباء کی کمیونٹی کا حصہ بن سکتے ہیں۔',
          About:'مدرسہ فیض العلوم کے بارے میں',
          AboutStart:'1965 میں محض چند کمروں کی عاجزانہ شروعات کے ساتھ شروع ہونے والا مدرسہ فیض العلوم چند اچھے آدمیوں کا خواب تھا جو طلبہ کو دونوں جہانوں کی بہترین تعلیم فراہم کرنا چاہتے تھے۔',
          AboutBody1:"مدرسہ کے طلباء کو قرآن و سنت کے رہنما اصولوں کے ساتھ پڑھایا جاتا ہے۔ وہ ریاضی، سائنس اور زبان جیسے جدید تعلیم کے مضامین سے بھی لیس ہیں۔ سابق طلباء کو پیشہ ورانہ تجارت، دستکاری اور پیشہ ورانہ فنون میں بھی تربیت دی جاتی ہے۔ مدرسہ کے آغاز سے ہی ہماری یہ کوشش رہی ہے کہ نوجوان طلباء کو ایسے باوقار انسانوں میں تبدیل کریں جو زندگی کے کسی بھی شعبے میں کسی بھی کردار کی ذمہ داری سنبھال سکیں اور دین اسلام کے لیے مینار بن سکیں۔",
          VisionBody:'مدرسہ فیض العلوم طلباء کو بااختیار بنانے کے لیے پرعزم ہے کہ وہ اپنی برادریوں میں فعال کردار ادا کرنے کے لیے ذمہ دار مکمل شہری بنیں۔ ہم معیاری تعلیم، تحقیق کی عمدگی، اور جدید تدریسی طریقوں کی وکالت کرتے ہیں۔ ہماری یونیورسٹی اقدار، انسانیت اور رواداری کو اپناتی ہے تاکہ فارغ التحصیل طلباء کو علم اور خوبیوں کے ساتھ اپنی کمیونٹی کی خدمت کر سکیں۔',
          goal1: "تحسين جودة التعليم العالي.",
          goal2: "وضع الطلاب في بيئة تعليمية تركز على الطالب وتعزز التنمية الاقتصادية والاجتماعية، بهدف تزويدهم بمهارات القيادة وإشراكهم في خدمة المجتمع.",
          goal3: "تعزيز الابتكار والسعي لتحقيق التميز في التعليم والتعلم.",
          goal4: "اعتماد طرق التدريس الحديثة مثل التعليم في الفصول الدراسية، والتعليم عن بعد، والتعلم الإلكتروني، والتعلم عبر الهاتف المحمول، والتعلم الذاتي مدى الحياة.",
          goal5: "تطبيق الأنظمة المعترف بها عالميًا لضمان جودة التعليم والاعتماد الأكاديمي، على المستويين الإداري والأكاديمي، وللتنافس مع الجامعات العربية والدولية.",
          Strength:'مدرسہ کی طاقت',
          strengthbody:'مدرسہ فیض العلوم سیونی اپنے بانیوں کے نظریے اور خواب کو پورا کرنے کے لیے انسانی اقدار اور رواداری کا پرچار کرتا ہے۔',
          seoniText1: "شہر سیونی صوبہ مدھیہ پردیش کا ایک شہر و ضلع ہے۔ روڈ ویز وریلوے لائن سیونی سے بھوپال کو جوڑتی ہے۔ ناگپور (مہاراشٹر) سے نیشنل ہائی وے نمبر ۷ سیونی سے ہوتے ہوئے جبلپور شہر کو جاتا ہے۔ ناگپور سے سیونی کا فاصلہ ۱۲۷ کلو میٹر اور سیونی سے جبلپور کا فاصلہ ۱۴۵ کلو میٹر ہے۔ ناگپور میں انٹرنیشنل ایرپورٹ بھی واقع ہے۔ سیونی ضلع کی کل آبادی میں سے تقریباً ۳۰ فیصد مسلم آبادی ہے۔ یہ ضلع تعلیمی میدان میں انتہا ئی پس ماندہ ہے اور لوگ بھولے بھالے سیدھے سادھے ہیں۔",
          seoniText2: "مسلمانوں کی اکثریت کاشتکاری پر انحصار کرتی ہے۔ کچھ لوگ چھوٹے کاروبار اور تجارت میں مصروف ہیں، لیکن اکثریت مالی اعتبار سے کمزور ہے۔ یہ مالی پسماندگی تعلیمی میدان پر گہرا اثر ڈال رہی ہے اور زیادہ تر بچے علم سے محروم ہیں۔ دینی تعلیم کی کمی بھی پائی جاتی ہے۔",
          seoniText3: "سیونی اور اس کے آس پاس کے علاقوں میں مسلمانوں کی قابل ذکر تعداد کے باوجود دینی اور دنیاوی دونوں تعلیم میں بہت کمی ہے۔ مقامی مکاتب میں دی جانے والی ابتدائی اسلامی تعلیم کا معیار انتہائی ناقص ہے اور بعض دیہات میں تو اس کا کوئی انتظام ہی نہیں ہے۔",
          seoniText4: "مدرسہ فیض العلوم سیونی اور پورے مدھیہ پردیش میں تعلیمی اور دینی سرگرمیوں کے لئے مرکزی حیثیت رکھتا ہے اور یہاں کے لوگوں کے لئے امید کا چراغ ہے۔ یہ ادارہ تعلیمی معیار کو بلند کرنے کی کوشش میں مصروف ہے۔",
          seoniText5: "سیونی کے معروف علماء میں حضرت مولانا ابومحمد ابراہیم آروی، مولانا احمد سعید سہارنپوری، مولانا صدیق حسن بہاری، مولانا محمد یاسین کانپوری وغیرہ شامل ہیں جنہوں نے اس علاقے میں تعلیم اور اسلام کی ترویج میں اہم کردار ادا کیا۔"
        

        }
      },
      // Add more languages here
      hi: {
        translation: {
          welcome: "स्वागत है",
          to: "में",
          madarsa: "मदरसा फ़ैज़ुल उलूम, सिवनी",
          intro1: "मदरसा फ़ैज़ुल उलूम में, हम पारंपरिक इस्लामी शिक्षा और आधुनिक शैक्षणिक विषयों के संतुलित पाठ्यक्रम के साथ दिमाग और दिल को पोषित करने के लिए प्रतिबद्ध हैं। हमारा लक्ष्य व्यक्तियों को सशक्त बनाना और शिक्षा के माध्यम से पूरे समुदाय को ऊपर उठाना है।",
          intro2: "हम विभिन्न पाठ्यक्रम प्रदान करते हैं जो हमारे छात्रों की जरूरतों को पूरा करते हैं, यह सुनिश्चित करते हैं कि शिक्षा सभी के लिए सुलभ और किफायती हो, विशेष रूप से वंचित पृष्ठभूमि वाले छात्रों के लिए।",
          join: "मदरसा फ़ैज़ुल उलूम में हमारे साथ जुड़ें और एक जीवंत शैक्षिक समुदाय का हिस्सा बनें जहाँ शिक्षा, मूल्यों और परंपरा का संगम होता है।",
          topReason: "मदरसा फ़ैज़ुल उलूम में अध्ययन के शीर्ष कारण",
          topReasonBody: "हम आपको मदरसा फ़ैज़ुल उलूम में अध्ययन के कई लाभों की याद दिलाना चाहेंगे।",
          Authenticity: "प्रामाणिकता",
          AuthenticityBody: "हमारा पाठ्यक्रम कुरान और सुन्नत पर आधारित सही और प्रामाणिक ज्ञान पर आधारित है।",
          Affordability: "सुलभता",
          AffordabilityBody: "हमारी फीस स्नातक कार्यक्रम के लिए अपेक्षाकृत कम और सुलभ है।",
          Accessibility: "उपलब्धता",
          AccessibilityBody: "आप दुनिया के किसी भी कोने से ऑनलाइन अध्ययन कर सकते हैं।",
          Community: "समुदाय",
          CommunityBody: "आप पूरे भारत के मुस्लिम छात्रों के समुदाय का हिस्सा बन सकते हैं।",
          About: "मदरसा फ़ैज़-उल-उलूम के बारे में",
          AboutStart: "1965 में कुछ कमरों से शुरू होकर, मदरसा फ़ैज़ुल उलूम कुछ अच्छे लोगों का सपना था जो छात्रों को दुनिया के सर्वश्रेष्ठ शिक्षा प्रदान करना चाहते थे।",
          AboutBody1: "मदरसा के छात्रों को कुरान और सुन्नत के मार्गदर्शक सिद्धांतों के साथ पढ़ाया जाता है। उन्हें गणित, विज्ञान, भाषाएँ और आधुनिक शिक्षा के विषय भी सिखाए जाते हैं।",
          VisionBody: "मदरसा फ़ैज़-उल-उलूम छात्रों को जिम्मेदार नागरिक बनाने के लिए प्रतिबद्ध है जो अपने समुदायों में सक्रिय भूमिका निभा सकें।",
          goal1: "उच्च शिक्षा की गुणवत्ता में सुधार करें।",
          goal2: "छात्रों को नेतृत्व कौशल प्रदान करने के उद्देश्य से एक छात्र-केंद्रित शिक्षा वातावरण प्रदान करें।",
          goal3: "शिक्षण और अधिगम में उत्कृष्टता और नवाचार को बढ़ावा दें।",
          goal4: "कक्षा शिक्षण, दूरस्थ शिक्षण, ई-लर्निंग, मोबाइल शिक्षण, और आजीवन आत्म-शिक्षण जैसी आधुनिक शिक्षण विधियों को अपनाएं।",
          goal5: "शैक्षिक मान्यता सुनिश्चित करने के लिए सार्वभौमिक रूप से मान्यता प्राप्त प्रणालियों को लागू करें।",
          Strength: "मदरसा ताकत",
          strengthbody: "मदरसा फ़ैज़ उल उलूम सिवनी मानव मूल्यों और धैर्य को बढ़ावा देता है ताकि अपने संस्थापकों के आदर्श और सपनों को पूरा कर सके।",
          seoniText1: "शहर सियोनी मध्य प्रदेश का एक शहर और जिला है। सड़कें और रेलमार्ग सियोनी को भोपाल से जोड़ते हैं। राष्ट्रीय राजमार्ग 7 सियोनी से होते हुए नागपुर (महाराष्ट्र) से जबलपुर जाता है। नागपुर से सियोनी की दूरी 127 किमी है, और सियोनी से जबलपुर की दूरी 145 किमी है। नागपुर में एक अंतर्राष्ट्रीय हवाई अड्डा भी है। सियोनी की लगभग 30% जनसंख्या मुस्लिम है। यह जिला शिक्षा के क्षेत्र में अत्यधिक पिछड़ा हुआ है, और यहाँ के लोग सरल और विनम्र हैं।",
          seoniText2: "मुस्लिम आबादी का अधिकांश हिस्सा जीविका के लिए खेती पर निर्भर है। कुछ लोग छोटे व्यापार और व्यवसाय में लगे हुए हैं, लेकिन अधिकांश आर्थिक रूप से कमजोर हैं। इस आर्थिक कमजोरी का शिक्षा पर गहरा प्रभाव पड़ा है और कई बच्चे बुनियादी शिक्षा से वंचित हैं। इसके अलावा, धार्मिक शिक्षा की भी कमी है।",
          seoniText3: "सियोनी और इसके आसपास के क्षेत्रों में मुस्लिमों की महत्वपूर्ण संख्या होने के बावजूद, धार्मिक और सामान्य दोनों प्रकार की शिक्षा में भारी कमी है। स्थानीय मकतबों में दी जाने वाली प्रारंभिक इस्लामी शिक्षा का स्तर अत्यंत खराब है, और कुछ गाँवों में तो इसका कोई प्रबंध ही नहीं है।",
          seoniText4: "मदरसा फैजुल उलूम सियोनी और पूरे मध्य प्रदेश के लिए शिक्षा और धार्मिक गतिविधियों का एक केंद्रीय स्थान रखता है। यह क्षेत्र के लिए एक आशा की किरण है और शिक्षा के स्तर को ऊँचा करने के लिए प्रयासरत है।",
          seoniText5: "सियोनी के प्रमुख विद्वानों में हज़रत मौलाना अबू मोहम्मद इब्राहिम आर्वी, मौलाना अहमद सईद सहारनपुरी, मौलाना सिद्दीक हसन बहारी, और मौलाना मोहम्मद यासीन कानपुरी शामिल हैं, जिन्होंने क्षेत्र में शिक्षा और इस्लाम के प्रचार में महत्वपूर्ण भूमिका निभाई।"
      
        },
        contact: {
          callUs: {
            title: "हमें कॉल करें",
            details: ["(7770) 123 4567", "(7770) 123 4567"]
          },
          mailUs: {
            title: "हमें मेल करें",
            details: ["madarsafaizululoomseoni@gmail.com"]
          },
          openingHours: {
            title: "खुलने का समय",
            details: ["सोम - शुक्र : 10am से 4pm", "शनिवार - रविवार : बंद"]
          },
          address: {
            title: "पता",
            details: ["जनता नगर, डोरली चतरपुर,", "सिवनी, बोरदाई, मध्य प्रदेश 480661"]
          }
        }
      },
    
      ar: {
        translation: {
          welcome: "مرحبا",
          to: "إلى",
          madarsa: "مدرسة فيض العلوم، سيواني",
          intro1: "في مدرسة فيض العلوم، نحن ملتزمون بتغذية العقول والقلوب بمنهج متوازن يشمل كلًا من التعاليم الإسلامية التقليدية والمواد الأكاديمية الحديثة. هدفنا هو تمكين الأفراد ورفع مستوى المجتمع من خلال التعليم.",
          intro2: "نقدم دورات متنوعة تلبي احتياجات طلابنا، مع التأكد من أن التعليم متاح وميسور التكلفة للجميع، بما في ذلك الطلاب ذوي الخلفيات الفقيرة.",
          join: "انضم إلينا في مدرسة فيض العلوم وكن جزءًا من مجتمع تعليمي حيوي حيث تلتقي القيم والتعليم.",
          topReason: "أهم الأسباب للدراسة في مدرسة فيض العلوم",
          topReasonBody: "نود أن نذكركم ببعض الفوائد العديدة للدراسة في مدرسة فيض العلوم",
          Authenticity: "الأصالة",
          AuthenticityBody: "منهجنا مبني على المعرفة الصحيحة والأصيلة بناءً على القرآن والسنة.",
          Affordability: "التكلفة الميسرة",
          AffordabilityBody: "الرسوم منخفضة نسبيًا ومناسبة لبرنامج الشهادة.",
          Accessibility: "الوصول",
          AccessibilityBody: "يمكنك الدراسة عبر الإنترنت من أي مكان في العالم.",
          Community: "المجتمع",
          CommunityBody: "يمكنك أن تكون جزءًا من مجتمع الطلاب المسلمين من جميع أنحاء الهند.",
          About: "عن مدرسة فيض العلوم",
          AboutStart: "بدأت مدرسة فيض العلوم في عام 1965 ببداية متواضعة مع عدد قليل من الغرف، وكانت حلم عدد قليل من الرجال الصالحين الذين أرادوا تقديم أفضل تعليم للطلاب.",
          AboutBody1: "يتم تدريس طلاب المدرسة بمبادئ توجيهية مستندة إلى القرآن والسنة. كما يتم تعليمهم مواضيع التعليم الحديث مثل الرياضيات والعلوم واللغات.",
          VisionBody: "مدرسة فيض العلوم ملتزمة بتمكين الطلاب ليصبحوا مواطنين مسؤولين يلعبون دورًا نشطًا في مجتمعاتهم.",
          goal1: "تحسين جودة التعليم العالي.",
          goal2: "وضع الطلاب في بيئة تعليمية تركز على الطالب وتعزز التنمية الاقتصادية والاجتماعية.",
          goal3: "تعزيز الابتكار والسعي للتميز في التدريس والتعلم.",
          goal4: "اعتماد طرق تعليم حديثة مثل التعلم في الفصول الدراسية والتعلم عن بعد والتعلم الإلكتروني والتعلم الذاتي مدى الحياة.",
          goal5: "تطبيق الأنظمة المعترف بها عالميًا لضمان جودة التعليم والاعتماد الأكاديمي.",
          Strength: "قوة المدرسة",
          strengthbody: "مدرسة فيض العلوم سيواني تنشر القيم الإنسانية والصبر لتحقيق أيديولوجية وأحلام مؤسسيها.",
          seoniText1: "مدينة سيواني هي مدينة ومنطقة في ولاية ماديا براديش. تربط الطرق والسكك الحديدية سيواني ببوبال. يمر الطريق الوطني رقم 7 عبر سيواني ليربط بين ناجبور (ماهاراشترا) وجابالبور. المسافة بين ناجبور وسيواني هي 127 كم، ومن سيواني إلى جابالبور 145 كم. يوجد في ناجبور مطار دولي. حوالي 30٪ من سكان سيواني مسلمون. المنطقة متخلفة تعليميًا، وأهلها بسطاء ومتواضعون.",
          seoniText2: "يعتمد معظم المسلمين على الزراعة للمعيشة. يعمل بعضهم في التجارة والأعمال الصغيرة، ولكن الأغلبية ضعيفة ماليًا. أثر هذا الضعف المالي بشكل كبير على التعليم، حيث يفتقر العديد من الأطفال إلى التعليم الأساسي. بالإضافة إلى ذلك، هناك نقص كبير في التعليم الديني.",
          seoniText3: "بالرغم من وجود عدد كبير من المسلمين في سيواني والمناطق المجاورة، فإن التعليم الديني والدنيوي ناقص في المنطقة. معيار التعليم الإسلامي المقدم في المدارس المحلية ضعيف للغاية، وفي بعض القرى لا يوجد تعليم ديني على الإطلاق.",
          seoniText4: "تحظى مدرسة فيض العلوم بمكانة مركزية في منطقة سيواني وفي ولاية ماديا براديش بأكملها من حيث الأنشطة التعليمية والدينية. إنها منارة أمل للمنطقة، تسعى جاهدة لرفع مستوى التعليم.",
          seoniText5: "من بين العلماء البارزين الذين خدموا في سيواني، حضرة مولانا أبو محمد إبراهيم آرفي، مولانا أحمد سعيد سهارنفوري، مولانا صديق حسن البهاري، مولانا محمد ياسين الكانبوري وغيرهم، حيث لعبوا دورًا كبيرًا في نشر التعليم والإسلام في المنطقة."
      
        },
        contact: {
          callUs: {
            title: "اتصل بنا",
            details: ["(7770) 123 4567", "(7770) 123 4567"]
          },
          mailUs: {
            title: "أرسل لنا",
            details: ["madarsafaizululoomseoni@gmail.com"]
          },
          openingHours: {
            title: "ساعات العمل",
            details: ["الإثنين - الجمعة: 10 صباحًا إلى 4 مساءً", "السبت - الأحد: مغلق"]
          },
          address: {
            title: "العنوان",
            details: ["جانتا ناغار، دورلي شاتاربور,", "سيواني، بورداي، مادهيا براديش 480661"]
          }
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

  export default i18n;
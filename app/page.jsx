'use client'
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link'
import Deal from './Deal';
import styles from '@app/logo.module.css'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className={`${styles.logo} text-3xl`}>بني سويف بعيون مختلفة</a>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden block text-gray-900 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <Image
          src="/more.png" // Path to the image in the public folder
          alt="Example image"
          width={25} // Image width
          height={25

          } // Image height
        />
      </button>

      {/* Menu Items */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-[#F78744] transition duration-75" href="#" onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>
                الرئيسية
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-[#F78744] transition duration-75" href="#" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                اعرف عننا
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-[#F78744] transition duration-75" onClick={() => document.getElementById('deal').scrollIntoView({ behavior: 'smooth' })}>
                ازاي تعرف تتعامل معاهم
              </a>
            </li>
            <li>
              <button className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-[#F78744] transition duration-75" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                اتواصل معانا
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id='hero' className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex justify-center items-center lg:col-span-5">
          <Image
            src="/rb_2149651422.png" // Path to the image in the public folder
            alt="Example image"
            width={500} // Image width
            height={300} // Image height
            className="max-w-full h-auto" // Ensures responsiveness
          />
        </div>
        <div className="text-center lg:text-right lg:col-span-7 flex flex-col justify-center items-center lg:items-end">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            مبادرة بني سويف بعيون مختلفة
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            مبادرة تهدف إلى تعزيز الوعي بحقوق الأشخاص ذوي الإعاقة ودعم دمجهم الكامل في المجتمع.
          </p>
          <div className="flex gap-x-4" > {/* Flex and gap for inline buttons */}
            <a
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-black rounded-lg hover:bg-[#F78744] hover:text-white hover:border-[#F78744] transition duration-75"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              تواصل معانا
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeSt-t7swM6oqJCCCV8JUECnF3QjDgJHDCApGufbwFDd-paVw/viewform?usp=send_form"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-[#F78744] hover:text-white hover:border-[#F78744] transition duration-75"
            >
              تطوع معنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <>
      <div id='about' className='flex w-full justify-center items-center bg-[#2C449C]'>
        <div className="sm:flex items-center max-w-screen-xl text-right">
          <div className="sm:w-1/2 p-10">
            <div className="mx-auto w-fit">
              <Image
                src="/About.jpg" // Path to the image in the public folder
                alt="Example image"
                width={400} // Image width
                height={200} // Image height
              />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-white border-b-2 border-[#F78744] uppercase">اعرف عننا</span>
              <h2 className="my-4 font-bold text-3xl  sm:text-4xl "><span className="text-white">عن مبادرتنا</span>
              </h2>
              <p className="text-white">
                مبادرة "بني سويف بعيون مختلفة" هي امتداد لحملة "أحسن صاحب" التي تنفذها مؤسسة صناع الحياة
                بالتعاون مع وزارة التضامن الاجتماعي ووزارة الشباب والرياضة. تهدف الحملة إلى تعزيز دمج الأشخاص ذوي الإعاقة
                في المجتمع، وتقليل العزلة الاجتماعية عنهم من خلال
                التركيز على خمسة محاور رئيسية: الصداقة الفردية، القيادة والتطوير الذاتي، توفير فرص العمل، العيش المستقل، والدمج الرقمي.
                الحملة تستهدف التوعية بحقوق الأشخاص ذوي الإعاقة وتصحيح المفاهيم الخاطئة عنهم، بالإضافة إلى تعزيز المشاركة الشاملة في مختلف مجالات الحياة، مثل التعليم، العمل، الرياضة، والثقافة.
                كما تسعى لتوفير بيئة داعمة تتيح لهم إبراز إبداعاتهم والمساهمة الفعالة في المجتمع.
                حققت الحملة نتائج بارزة حتى الآن، منها تدريب آلاف المتطوعين، إقامة ندوات توعية، وتوفير فرص تدريب وتوظيف لحديثي التخرج من ذوي الإعاقة
                . وتستمر في العمل على توسيع نطاقها ليشمل أكبر عدد من المحافظات والمستفيدين.
                المبادرة في بني سويف تهدف إلى تعزيز هذه الجهود محليًا،
                حيث يتم التعاون مع متطوعين ومؤسسات مجتمعية لنشر الوعي وإشراك المجتمع في دعم ذوي الإعاقة لخلق مجتمع متساوٍ ومتقبل
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Features() {
  return (
    <section className="bg-white dark:bg-gray-900 text-right">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            ايه اللي احنا بنشتغل عليه ؟
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
              <Image
                src="/friend.png"
                alt="description"
                width={1000}
                height={1000}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">الصداقة الفردية</h3>
            <p className="text-gray-500 dark:text-gray-400">
              تركز الحملة على بناء علاقات شخصية وصداقة بين الأشخاص ذوي الإعاقة وبقية أفراد المجتمع، مما يعزز التفاهم المتبادل ويشجع على إدماجهم في الحياة الاجتماعية
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
              <Image
                src="/working-time.png"
                alt="description"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">الوظائف والفرص المهنية</h3>
            <p className="text-gray-500 dark:text-gray-400">
              تعمل الحملة على توفير فرص العمل للأشخاص ذوي الإعاقة
              بالتعاون مع الشركات والمؤسسات لتقديم تدريب مهني وفرص توظيف تتناسب مع قدراتهم واحتياجاته
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
              <Image
                src="/leadership.png"
                alt="description"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">القيادة والتطوير الذاتي</h3>
            <p className="text-gray-500 dark:text-gray-400">
              تمكين الأفراد ذوي الإعاقة من تطوير مهاراتهم القيادية والشخصية، مما يساعدهم على تحقيق استقلالهم وتقديم مساهمات فعّالة في المجتمع
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
              <Image
                src="/freedom.png"
                alt="description"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">العيش المستقل</h3>
            <p className="text-gray-500 dark:text-gray-400">
              دعم الأفراد ذوي الإعاقة في الحصول على حياة مستقلة من خلال تزويدهم بالموارد والفرص التي تتيح لهم العيش بكرامة وحرية            </p>
          </div>
        </div>
      </div>
    </section>
  );

}

function Contact() {
  return (
    <section id='contact' className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">تواصل معانا</h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">فريقنا الودود دايمًا هنا لو حابب تتكلم معانا.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">الايميل</h2>
            <p className="mt-2 text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">مكتب الجمعية</h2>
            <p className="mt-2 text-blue-500 dark:text-blue-400">حي الزهور عند مسجد ثروت الداعوري , محافظة بني سويف</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">رقم الهاتف</h2>
            <p className="mt-2 text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PhotoGallery = () => {
  const images = [
    '/Gallery/G1.jpeg',
    '/Gallery/G2.jpeg',
    '/Gallery/G3.jpeg',
    '/Gallery/G4.jpeg',
    '/Gallery/G5.jpeg',
    '/Gallery/G6.jpeg',
    '/Gallery/G7.jpeg',
    '/Gallery/G8.jpeg',
    '/Gallery/G9.jpeg',
    '/Gallery/G10.jpeg',
    '/Gallery/G11.jpeg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
        <h2 className="mb-4 mt-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
          معرض الصور
        </h2>
      </div>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-[600px]">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-top flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 z-10"
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

function Footer() {
  return (
    <>
      <footer className="bg-[#F28A40] rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center text-center">
          <div className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024 <a href="#" className="hover:underline">مبادرة بني سويف بعيون مختلفة™</a>. كل الحقوق محفوظة.
          </div>
          <div className="text-sm text-white sm:text-center dark:text-gray-400 mt-2">
            Done By © 2024 <a href="https://github.com/EngSeif" className="hover:underline">engseif</a>.
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Deal />
      <PhotoGallery />
      <Contact />
      <Footer />
    </>
  );
}

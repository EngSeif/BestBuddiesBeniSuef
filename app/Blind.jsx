'use client'
import Image from 'next/image';
import Link from 'next/link';

const content = [
    {
        imageSrc: '/Blind/Blind-Listen.jpg',
        title: 'اسمعني وما تفترضش',
        description: 'كثير من الناس يفترضون أن المكفوفين عاجزون عن أداء مهام بسيطة أو أنهم بحاجة إلى المساعدة في كل شيء. أحيانًا، نحن نحتاج فقط إلى سؤالنا "كيف يمكن مساعدتك؟" ليتمكن الشخص المكفوف من اتخاذ القرار بنفسه.',
    },
    {
        imageSrc: '/Blind/Blind-Respect.jpg',
        title: 'احترم حياتي الشخصية',
        description: 'المكفوفين لديهم طموحات وأحلام مثل أي شخص آخر. تعامل معنا باحترام ولا تتعامل بأسلوب شفقة أو كأننا عبء على المجتمع.',
    },
    {
        imageSrc: '/Blind/Blind-Direction.jpg',
        title: 'وجهني بالكلام مش بالمشاعر',
        description: 'في المواقف التي تتطلب توجيه، وصف الطريق أو المكان بشكل دقيق، مثل "5 خطوات قدامك"، بدلاً من الكلمات غير المفيدة مثل "هناك" أو "على الشمال".',
    },
    {
        imageSrc: '/Blind/Blind-Tools.jpg',
        title: 'احترم أدواتي',
        description: 'العصا أو الكلب المرشد ليس مجرد أداة، بل جزء من حياتنا. لا تلمس هذه الأدوات إلا بإذن منا.',
    },
    {
        imageSrc: '/Blind/Blind-Stop.jpg',
        title: 'تجنب نظرات الشفقة',
        description: 'لا ترفع صوتك أو تستخدم نبرة تعاطف مبالغ فيها. تعامل معنا بشكل طبيعي وباحترام.',
    },
    {
        imageSrc: '/Blind/Blind-Digital.jpg',
        title: 'التقنيات المساعدة',
        description: 'هناك تقنيات مثل التطبيقات الصوتية وأجهزة القارئ الإلكتروني التي تساهم في تحسين حياة المكفوفين بشكل كبير.',
    },
    {
        imageSrc: '/Blind/Blind-Around.jpg',
        title: 'التفاعل مع البيئة المحيطة',
        description: 'في الأماكن العامة، يجب توفير إشارات صوتية للمكفوفين لمساعدتهم في التنقل بسهولة، مثل إشارات المرور الموجهة صوتيًا.',
    }
];

function Card({ imageSrc, title, description }) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image
                    className="w-full dark:hidden"
                    src={imageSrc}
                    alt={title}
                    width={500}
                    height={300}
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>
                    <Link
                        href="#"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                    >
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Blind() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 text-center">الإعاقة البصرية</h3>
            {content.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}

export default Blind;

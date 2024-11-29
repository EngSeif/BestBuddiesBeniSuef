'use client'
import Image from 'next/image';
import Link from 'next/link';

const content = [
    {
        imageSrc: '/Deaf/Deaf-Understand.jpg',
        title: 'محتاج وقت أكتر للفهم',
        description: 'قد نحتاج إلى وقت أطول لفهم التعليمات أو التعامل مع المواقف. لا تستعجل في توقعاتك ولا تجعل ذلك عبئًا علينا.',
    },
    {
        imageSrc: '/Deaf/Deaf-Help.jpg',
        title: 'محتاج مساعدة مش شفقة',
        description: 'لا نحتاج إلى شفقة أو معاملة خاصة، بل إلى دعم عملي مثل الشرح أو تقديم مساعدة إذا طلبناها.',
    },
    {
        imageSrc: '/Deaf/Deaf-Interest.jpg',
        title: 'أنا زي أي حد عندي اهتمامات',
        description: 'نحن نملك طموحات وأحلام مثل أي شخص آخر. لا تتعامل معنا على أننا أقل قدرة أو نتجاهل رغباتنا.',
    },
    {
        imageSrc: '/Deaf/Deaf-Bound.jpg',
        title: 'احترام الحدود',
        description: 'لدينا خصوصيتنا وحقوقنا مثل أي شخص آخر. احترم مساحتنا الشخصية وتجنب التصرفات المتطفلة أو القاسية.',
    },
    {
        imageSrc: '/Deaf/Deaf-Communicate.jpg',
        title: 'فهم وسائل التواصل',
        description: 'إذا كانت هناك مشكلة في الفهم، نفضل أن تسألنا أو توضح لنا أكثر بدلاً من فرض طرق تواصل غير مناسبة.',
    },
    {
        imageSrc: '/Deaf/Deaf-Sign.jpg',
        title: 'تعليم لغة الإشارة',
        description: 'تشجيع المجتمع على تعلم لغة الإشارة لتسهيل التواصل مع الأشخاص ذوي الإعاقة السمعية.',
    },
    {
        imageSrc: '/Deaf/Deaf-Translate.jpg',
        title: 'الترجمة النصية',
        description: 'إضافة الترجمة النصية في الأماكن العامة والمناسبات لتمكين الأشخاص ذوي الإعاقة السمعية من المشاركة.',
    },
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

function Deaf() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 text-center">الإعاقة السمعية</h3>
            {content.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}

export default Deaf;

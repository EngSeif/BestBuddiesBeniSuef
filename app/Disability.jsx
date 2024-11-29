'use client'
import Image from 'next/image';
import Link from 'next/link';

const content = [
    {
        imageSrc: '/Disability/Disability-Health.jpg',
        title: 'الرعاية الصحية',
        description: 'من المهم توفير جلسات علاج طبيعي لتحسين الحركة وزيادة القدرة على التكيف مع الحياة اليومية.',
    },
    {
        imageSrc: '/Disability/Disability-Public.jpg',
        title: 'تعديل المنازل والأماكن العامة',
        description: 'تأكد من أن الأماكن العامة والمنازل مجهزة بما يكفي من المنحدرات والأبواب الواسعة لتسهيل الحركة باستخدام الكراسي المتحركة.',
    },
    {
        imageSrc: '/Disability/Disability-Tools.jpg',
        title: 'الأجهزة المساعدة:',
        description: 'يجب أن تتوفر الأجهزة المساعدة مثل الكراسي المتحركة والمشايات لضمان التنقل بسهولة وراحة.',
    },
    {
        imageSrc: '/Disability/Disability-aware.jpg',
        title: 'الوعي المجتمعي',
        description: 'يجب توعية الناس بكيفية مساعدة ذوي الإعاقة الحركية دون تعريضهم للإحراج أو الخجل، مثل مساعدتهم في التنقل بطريقة محترمة وسلسة.',
    },
    {
        imageSrc: '/Disability/Disabilitu-dependent.jpg',
        title: 'الاستقلالية في العمل',
        description: 'التشجيع على توفير بيئات عمل ملائمة لذوي الإعاقة الحركية، مثل مكاتب مجهزة بالكراسي المتحركة والمرافق الملائمة لهم.',
    },
    {
        imageSrc: '/Disability/Disability-sport.jpg',
        title: 'الوعي بتوفير المساحات العامة',
        description: 'التأكيد على توفير مساحات عامة ومرافق رياضية يستطيع الأشخاص ذوو الإعاقة الحركية الوصول إليها، لتعزيز صحتهم النفسية والجسدية.',
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

function Disability() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 text-center">الإعاقة الحركية</h3>
            {content.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}

export default Disability;

'use client'
import Image from 'next/image';
import Link from 'next/link';

const content = [
    {
        imageSrc: '/Disability/Disability-Health.jpg',
        title: 'توفير الرعاية والفرص المتساوية',
        description: 'الأشخاص ذوي الإعاقة الذهنية يمكنهم تحقيق الكثير من النجاح إذا تم تزويدهم بالفرص اللازمة والموارد التعليمية المناسبة.',
    },
    {
        imageSrc: '/Blind/Blind-Respect.jpg',
        title: 'التعامل باحترام',
        description: 'يجب أن يتعامل الناس مع ذوي الإعاقة الذهنية كأشخاص طبيعيين. لا تعزلهم أو تقيدهم، بل امنحهم فرصة للاعتماد على أنفسهم.',
    },
    {
        imageSrc: '/Mental/Mental-Hug.jpg',
        title: 'التفهم والدعم العاطفي',
        description: 'التأثيرات النفسية جراء العزلة أو المعاملة السلبية قد تكون شديدة. من المهم تقديم الدعم العاطفي وإظهار الاحترام لجميع الأشخاص بغض النظر عن نوع الإعاقة.',
    },
    {
        imageSrc: '/Mental/Mental-Train.jpg',
        title: 'التعليم والتدريب المهني',
        description: 'توفير فرص تعليمية وتدريبية لذوي الإعاقة الذهنية لكي يطوروا مهاراتهم ويصبحوا أعضاء فاعلين في المجتمع.',
    },
    {
        imageSrc: '/Mental/Mental-psyc.jpg',
        title: 'التأهيل النفسي',
        description: 'التأكيد على أهمية الدعم النفسي والتأهيل الاجتماعي لذوي الإعاقة الذهنية لتحسين حياتهم اليومية.',
    },
    {
        imageSrc: '/Mental/Mental-talk.jpg',
        title: 'الاندماج الاجتماعي',
        description: 'تشجيع المجتمع على التعامل مع الأشخاص ذوي الإعاقة الذهنية بدون تمييز، وفتح فرص لهم في الأنشطة الاجتماعية والتوظيف.',
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

function Mental() {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-4 text-center">الإعاقة الحركية</h3>
            {content.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}

export default Mental;

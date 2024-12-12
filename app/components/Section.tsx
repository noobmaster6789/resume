import React from 'react'
type SectionProps = {
    title: string;
    children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl mb-8 text-gray-800">{title}</h2>
                {children}
            </div>
        </section>
    );
}
export default Section

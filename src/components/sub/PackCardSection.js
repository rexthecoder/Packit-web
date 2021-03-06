function PackCardSection() {
    return (
        <section className="py-12 lg:flex lg:justify-center">
            <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage:'url(https://images.unsplash.com/photo-1500981458086-b8a11cd163af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)'}}></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Connect with <span className="text-indigo-600 dark:text-indigo-400">People</span></h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

                    <div className="mt-8">
                        <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackCardSection

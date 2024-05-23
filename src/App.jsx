//import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {CORE_CONCEPTS, EXAMPLES} from './data/data.jsx'

function App() {
   const [ selectedTopic, setSelectedTopic ] =  useState('components');
    const concepts = CORE_CONCEPTS.map((item) => {
        // eslint-disable-next-line react/jsx-key
        return <CoreConcept {...item}/>
    })
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedButton);
    }

    return (
        <>
            <div>
                <Header></Header>
                <main>
                    <section id="core-concepts">
                        <h2>Time to get started</h2>
                        <ul>
                            {concepts}
                        </ul>
                    </section>

                    <section id ="examples">
                        <h2>Examples</h2>
                        <menu>
                            <TabButton onSelect={ () => handleSelect('components')} >Components</TabButton>
                            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                        </menu>
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>
                                    {EXAMPLES[selectedTopic].code}
                                </code>
                            </pre>

                        </div>
                    </section>

                </main>

            </div>
        </>
    )
}

export default App

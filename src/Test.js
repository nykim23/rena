import React from "react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default () => (

    <>
    <Animate play start={{ opacity:0 }} end={{ opacity:1 }}>
        <h1>React simple animate</h1>
    </Animate>
    

    <AnimateKeyframes play interationCount="infinite"
    keyframes={[ "opacity:0","opacity:1" ]}
    >
        <h1>React simple animate with keyframes</h1>
    </AnimateKeyframes>
    
    <AnimateGroup play>
        <Animate start={{ opacity:0 }} end={{ opacity:1 }} sequenceIndex={0}>
            first
        </Animate>
        <Animate start={{ opacity:0 }} end={{ opacity:1 }} sequenceIndex={1}>
            second
        </Animate>
        <Animate start={{ opacity:0 }} end={{ opacity:1 }} sequenceIndex={2}>
            third
        </Animate>
    </AnimateGroup>
    </>
)
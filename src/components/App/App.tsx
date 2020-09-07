import React, { useState } from 'react';
import { Container, Header, Content, Title, P, Night, PNight, TitleNight, HeaderNight, Button } from './styles';

const App = () => {
    const [nightMode, setNightMode] = useState(false);

    const title = `The Evolution in the actual days`;

    const text = `Two elements are essential in any evolutionary scheme, whether it be theistic or atheistic: long periods of time and the assumed validity of the molecules-to-man evolutionary scenario. Atheists care little for the biblical account, except to ridicule its statements. Theistic evolutionists, however, profess a certain allegiance to the Scriptures and must attempt to harmonize the biblical account with the evolutionary scenario. The biblical text, at least to the unbiased observer, indicates a universe and earth that were formed in six days; evolutionists suppose at least six billion years. The mechanism by which theistic evolutionists harmonize the two is known as the day-age theory.
    The key term in this attempted harmony is the word day as it is used in Genesis 1. The Hebrew word for day is yom, and, we are reminded, it is used in a variety of ways: (1) the daylight period in the diurnal cycle as in Genesis 1:5, 14, 16, 18; (2) a normal 24-hour period; and (3) an indefinite time period as in Psalm 90:10.
    A passage that is invariably appealed to is 2 Peter 3:8: "One day is with the Lord as a thousand years and a thousand years as one day." Also, it is claimed that too much activity took place on the sixth day (Genesis 2) to fit into a normal day: Adam's naming of thousands of animals, his perception of his loneliness, and the subsequent creation of Eve.
    The claim, then, is that the days of Genesis 1 are really long periods of time, which correspond to the major periods of evolutionary geological history.
    A Refutation of the Day-Age Theory
    Most Bible-believing creationists maintain the day-age theory is an unbiblical option for the following reasons:
    (1) An improper interpretation of 2 Peter 3:8.
    It is axiomatic in hermeneutics (the science of biblical interpretation) that "a text without a context is a pretext." Just as a tape recording can be edited to make the speaker say whatever the editor desires, so the Scriptures can be juggled to suit a person's fancy or predisposition. For example, "And Jesus answered ... 'What is truth?' " (John 18:37 - 38). All the above words are straight from the Bible, but a closer examination discloses that it was actually Pilate who uttered the statement, and that the intervening words have been "edited" out.
    2 Peter 3:3-10 is a unit. The context speaks of scoffers in the last days who will ridicule the second coming of Christ. Their rationale is uniformitarian in nature: Jesus promised to come quickly, He has not come yet, therefore He is not going to come at all. Peter refutes these uniformitarian assumptions with a reference to the Flood and the certainty of judgment for these scoffers. Then, responding to the charge that Christ has failed to fulfill His promise, Peter writes the words in question, and concludes by reaffirming the certainty of the second coming of Christ.`;

    const mode = nightMode ? 'NightMode' : 'LightMode';

    if (nightMode) {
        return (
            <Night>
                <HeaderNight>
                    {mode}
                    <Button onClick={() => setNightMode(!nightMode)}>
                        NightMode
                    </Button>
                </HeaderNight>
                <Content>
                    <TitleNight>
                        {title}
                    </TitleNight>
                    <PNight>
                        {text}
                    </PNight>
                </Content>
            </Night>
        );
    }

    return (
        <Container>
            <Header>
                {mode}
                <Button onClick={() => setNightMode(!nightMode)}>
                    NightMode
                </Button>
            </Header>
            <Content>
                <Title>
                    {title}
                </Title>
                <P>
                    {text}
                </P>
            </Content>
        </Container>
    );
};

export default App;
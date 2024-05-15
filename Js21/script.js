function Boo() {
    const values = [1, 2, 3, 4];
    let index = 0;
    console.log("Start");
    return {
        next: () => {
            if (index < values.length) {
                return { value: values[index++], done: false };
                
            } else {
                index = 0;
                console.log("Finish");
                return { done: true };
            }
        }
    };
}

const iterator1 = Boo()
    console.log(iterator1.next().value)
    console.log(iterator1.next().done)
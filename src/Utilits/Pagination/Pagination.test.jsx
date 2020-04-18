import {create} from "react-test-renderer";
import React from "react";
import Pagination from "./Pagination";


describe("Pagination component tests", () => {
    test("numberOfPages 11 but should be show 10", () => {
        const component = create(<Pagination
            allItems={11}
            countItems={1}
            pozitionSize={10}
        />);
        const root = component.root;
        const spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    test("if numberOfPage more then pozitionSize should be show button NEXT", () => {
        const component = create(<Pagination
            allItems={11}
            countItems={1}
            pozitionSize={10}
        />);
        const root = component.root;
        const buttons = root.findAllByType("button");
        expect(buttons.length).toBe(1);
    });
})

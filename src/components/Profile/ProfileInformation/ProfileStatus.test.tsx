import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("span should be in component on the first render", () => {
        const component = create(<ProfileStatus userStatus="test status!"/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("test status!");
    });

    test("span should be", () => {
        const component = create(<ProfileStatus userStatus="test status!"/>);
        const root = component.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after creation, <input> shouldn't be displayd ", () => {
        const component = create(<ProfileStatus userStatus="test status!"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test(" span should be correct status", () => {
        const component = create(<ProfileStatus userStatus="test status!"/>);
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("test status!");
    });

    test("after onDubleClick in span, input should be to correct status", () => {
        const component = create(<ProfileStatus userStatus="test status!"/>);
        const root = component.root;
        const span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("test status!");
    });

    test("Callback should be colled twice", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus userStatus="test status!" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactiveteEditMode();
        // @ts-ignore
        instance.deactiveteEditMode();
        expect(mockCallback.mock.calls.length).toBe(2);
    });
});
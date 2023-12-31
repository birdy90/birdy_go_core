import {Meta, StoryObj} from "@storybook/react";
import {BiPlanet} from "react-icons/bi";
import {Button, ConfirmModal, Modal, ModalProps, useModal} from "../src";
import {FC} from "react";

const StoryRenderComponent = (args: ModalProps, as: FC<ModalProps> = Modal) => {
    const Component = as;
    const modalId = 'some-modal';
    const modalData = useModal({
        id: modalId,
        onChange(val) {
            console.log(`Selected: ${JSON.stringify(val) ?? 'undefined'}`);
        }
    });

    return <>
        <Button onClick={modalData.open}>Open modal</Button>
        <Component {...args} {...modalData} />
    </>
}

export default {
    title: "Components/Modal",
    component: Modal,
    render: (args) => StoryRenderComponent(args),
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const commonArgs = {
    header: 'Some modal!',
    children: (
        <div className="flex justify-center">
            <BiPlanet size={128} />
        </div>
    ),
}

export const Default: Story = {
    args: {
        ...commonArgs,
        header: undefined,
        children: 'Be notified!'
    },
};

export const Confirm: Story = {
    args: {
        ...commonArgs,
    },
    render: (args) => StoryRenderComponent(args, ConfirmModal),
};
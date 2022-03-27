export const parameters = {
    docs: { inlineStories: false },
    actions: { argTypesRegex: '^on[A-Z].*', disabled: true },
    controls: {
        disable: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        showPanel: false,
    },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
};

export const decorators = [
    (Story) => {
        /**
         * Yes this is a hack.
         *
         * https://github.com/storybookjs/storybook/issues/9209
         *
         * I want to be able to have only MDX pages without any actual stories being listed
         * because they dont actually make any sense without the MDX.
         */
        const hideItems = ['[data-item-id="hidden-stories"]'];
        hideItems.map((i) => {
            const itm = window.parent.parent.document.querySelector(i);
            if (itm) {
                itm.style.display = 'none';
            }
        });

        return (
            <Story />
        );
    },
];

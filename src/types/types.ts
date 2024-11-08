export type loginPageContent =
    "login" |
    "create-account-info" |
    "create-account-email-success" |
    "create-account-success" |
    "reset-pwd-info" |
    "reset-pwd-email-success" |
    "reset-pwd" |
    "reset-pwd-success";

export type direction = 'row' | 'column';

export type application = 'archive' | 'vault' | 'calendar' | 'to-do' | 'progress' | null;

export type carousselDirection = 'backward' | 'forward';

export type iconType = {
    name: application,
    image: string,
};

export type app = {
    name: application,
    icon: string,
    preview: string,
    description: string,
};

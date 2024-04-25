import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: '重設密碼 | {siteName}',
    description: 'forgot password page title',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: '重設密碼',
    description: 'The page heading for the forgot password page.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: '輸入註冊所用的電郵以獲取重設密碼的郵件。',
    description: 'Instructions message for forgot password page.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: '輸入正確電郵',
    description: 'Invalid email address message for input field.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: '電郵',
    description: 'Email field label for the forgot password page.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: '提交',
    description: 'Submit button text for the forgot password page.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: '未能發送郵件',
    description: 'Failed to send password recovery email.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: '發生錯誤',
    description: 'Title for message that appears when error occurs for password assistance page',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'Your previous request is in progress, please try again in a few moments.',
    description: 'Message displayed when previous password reset request is still in progress.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: '輸入電郵',
    description: 'Error message that appears when user tries to submit empty email field',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: '輸入電郵',
    description: 'text help for the email',
  },
  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: '檢查電郵',
    description: 'Forgot password confirmation message title',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: '請與我們聯絡',
    description: 'Technical support link text',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: 'Need help signing in?',
    description: 'Sign in help link on forgot password page',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: '請與我們聯絡：',
    description: 'additional help text on forgot password page',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: '登入',
    description: 'login page link on password page',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} below.',
    description: 'extends the field error for alert message',
  },
  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'Invalid password reset link',
    description: 'Alert heading when reset password link is invalid',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'This password reset link is invalid. It may have been used already. Enter your email below to receive a new link.',
    description: 'Alert message when reset password link has expired or is invalid',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'Too many requests',
    description: 'Too many request at server end point',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'An error has occurred because of too many requests. Please try again after some time.',
    description: 'Error message that appears when server responds with 429 error code',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'Token validation failure',
    description: 'Failed to validate reset password token error message.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'An error has occurred. Try refreshing the page, or check your internet connection.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'An error has occurred. Try refreshing the page, or check your internet connection.',
    description: 'Error message that appears when server responds with 500 error code',
  },
});
export default messages;

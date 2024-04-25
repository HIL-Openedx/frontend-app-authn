import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'sign.in': {
    id: 'sign.in',
    defaultMessage: '登入',
    description: 'Sign in toggle text',
  },
  'reset.password.page.title': {
    id: 'reset.password.page.title',
    defaultMessage: '重設密碼 | {siteName}',
    description: 'page title',
  },
  'reset.password': {
    id: 'reset.password',
    defaultMessage: '重設密碼',
    description: 'The page heading and button text for reset password page.',
  },
  'reset.password.page.instructions': {
    id: 'reset.password.page.instructions',
    defaultMessage: '輸入新密碼',
    description: 'Instructions message for reset password page.',
  },
  'new.password.label': {
    id: 'new.password.label',
    defaultMessage: '新密碼',
    description: 'New password field label for the reset password page.',
  },
  'confirm.password.label': {
    id: 'confirm.password.label',
    defaultMessage: '確認新密碼',
    description: 'Confirm password field label for the reset password page.',
  },
  // validation errors
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: '密碼不符條件',
    description: 'Error message for empty or invalid password',
  },
  'passwords.do.not.match': {
    id: 'passwords.do.not.match',
    defaultMessage: '密碼不相同',
    description: 'Password format error.',
  },
  'confirm.your.password': {
    id: 'confirm.your.password',
    defaultMessage: '確認新密碼',
    description: 'Field validation message when confirm password is empty',
  },
  // alert banner strings
  'reset.password.failure.heading': {
    id: 'reset.password.failure.heading',
    defaultMessage: '重設不成功.',
    description: 'Heading for reset password request failure',
  },
  'reset.password.form.submission.error': {
    id: 'reset.password.form.submission.error',
    defaultMessage: 'Please check your responses and try again.',
    description: 'Error message for reset password page',
  },
  'reset.server.rate.limit.error': {
    id: 'reset.server.rate.limit.error',
    defaultMessage: 'Too many requests.',
    description: 'Too many request at server end point',
  },
  'reset.password.success.heading': {
    id: 'reset.password.success.heading',
    defaultMessage: '重設成功',
    description: 'Heading for alert box when reset password is successful',
  },
  'reset.password.success': {
    id: 'reset.password.success',
    defaultMessage: '重設成功，可重新登入',
    description: 'Reset password success message',
  },
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'An error has occurred. Try refreshing the page, or check your internet connection.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  'rate.limit.error': {
    id: 'rate.limit.error',
    defaultMessage: 'An error has occurred because of too many requests. Please try again after some time.',
    description: 'Error message that appears when server responds with 429 error code',
  },
});

export default messages;

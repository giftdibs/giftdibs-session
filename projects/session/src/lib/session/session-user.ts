export interface SessionUser {
  emailAddress?: string;
  emailAddressVerified?: boolean;
  facebookId?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  notificationSettings?: {
    [settingName: string]: {
      allowEmail?: boolean;
    };
  };
}

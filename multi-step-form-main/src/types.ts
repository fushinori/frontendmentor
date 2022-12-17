export enum ActiveStep {
  Info = 1,
  Plan,
  AddOns,
  Summary,
  Done,
}

export interface InfoFormData {
  name: string;
  email: string;
  phone: string;
}

export enum Plan {
  Arcade,
  Advanced,
  Pro,
}

export enum Billing {
  Monthly,
  Yearly,
}

export enum AddOn {
  OnlineService,
  LargerStorage,
  CustomizableProfile,
}

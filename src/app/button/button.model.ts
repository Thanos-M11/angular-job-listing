export type BtnFeature = 'role' | 'level' | 'languages' | 'tools' | 'clear';
export type ActionType = 'add' | 'remove' | 'clear';

export interface ButtonConfigurator {
  content: string;
  feature: BtnFeature;
  actionType: ActionType;
  withWrapper?: boolean;
  className?: string;
}

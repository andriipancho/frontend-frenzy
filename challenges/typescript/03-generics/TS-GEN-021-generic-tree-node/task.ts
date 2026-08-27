export type TreeNode<T> = {
  value: unknown;
  children: TreeNode<unknown>[];
};

export interface EndpointContract {
  listProjects: {
    request: { organizationId: string; cursor?: string };
    response: { ids: string[]; nextCursor?: string };
  };
  updateProject: {
    request: { projectId: string; name: string };
    response: { id: string; name: string; updatedAt: Date };
  };
  deleteProject: {
    request: { projectId: string };
    response: { deleted: true };
  };
}

export interface EndpointClient {
  invoke(
    endpoint: keyof EndpointContract,
    request: EndpointContract[keyof EndpointContract]["request"],
  ): Promise<EndpointContract[keyof EndpointContract]["response"]>;
}

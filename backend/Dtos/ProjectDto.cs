namespace backend.Dtos;

public record class ProjectDto
(
  string Title,
  string Description,
  string[] Tools,
  string? WebUrl,
  string? GitHubUrl
);
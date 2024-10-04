namespace backend.Entities;

public class Project
{
  public int Id { get; set; }
  public required string Title { get; set; }
  public required string Description { get; set; }
  public required string[] Tools { get; set; }
  public string? WebUrl { get; set; }
  public string? GitHubUrl { get; set; }
}
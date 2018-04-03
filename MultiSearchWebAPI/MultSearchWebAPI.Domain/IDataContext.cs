using MultSearchWebAPI.Domain.DTO;

namespace MultSearchWebAPI.Domain
{
  public interface IDataContext
  {
    SearchDTO Database { get; }

    void Dispose();
  }
}
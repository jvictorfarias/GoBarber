import ICacheProviderDTO from '../dtos/ICacheProviderDTO';

export default interface ICacheProvider {
  save(data: ICacheProviderDTO): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}

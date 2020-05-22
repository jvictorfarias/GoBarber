import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 18, 12).getTime();
    });
  });

  it('should be able to list appointments of a provider on a specific day', async () => {
    const iterable = Array.from({ length: 2 }, (_, index) => index + 13);

    const appointments = await Promise.all(
      iterable.map(async item =>
        fakeAppointmentsRepository.create({
          provider_id: 'provider-id',
          user_id: 'user-id',
          date: new Date(2020, 4, 18, item, 0, 0),
        }),
      ),
    );

    const availability = await listProviderAppointmentsService.execute({
      provider_id: 'provider-id',
      day: 18,
      month: 5,
      year: 2020,
    });

    expect(availability).toEqual([...appointments]);
  });
});

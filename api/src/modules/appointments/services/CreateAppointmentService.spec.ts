import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      user_id: 'user',
      provider_id: '231321312',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('231321312');
  });

  it('should not be able to create appointments in the same date', async () => {
    const appointmentDate = new Date();

    await createAppointmentService.execute({
      date: appointmentDate,
      user_id: 'user',
      provider_id: '231321312',
    });

    expect(
      createAppointmentService.execute({
        date: appointmentDate,
        user_id: 'user',
        provider_id: '231321312',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

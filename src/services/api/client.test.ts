import { ApiClient } from './client';

// Mock fetch
global.fetch = jest.fn();

describe('ApiClient', () => {
  let client: ApiClient;
  const baseURL = 'https://api.example.com';

  beforeEach(() => {
    client = new ApiClient(baseURL);
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with base URL', () => {
      expect(client).toBeInstanceOf(ApiClient);
    });
  });

  describe('setAuthToken', () => {
    it('should set authorization token', async () => {
      const token = 'test-token';
      client.setAuthToken(token);

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({ success: true }),
        status: 200,
        statusText: 'OK',
      });

      await client.get('/test');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining(''),
        expect.objectContaining({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          headers: expect.objectContaining({
            Authorization: `Bearer ${token}`,
          }),
        })
      );
    });
  });

  describe('clearAuthToken', () => {
    it('should remove authorization token', async () => {
      client.setAuthToken('test-token');
      client.clearAuthToken();

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({ success: true }),
        status: 200,
        statusText: 'OK',
      });

      await client.get('/test');

      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining(''),
        expect.objectContaining({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          headers: expect.not.objectContaining({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            Authorization: expect.stringContaining(''),
          }),
        })
      );
    });
  });

  describe('get', () => {
    it('should make GET request successfully', async () => {
      const mockData = { id: 1, name: 'Test' };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
        status: 200,
        statusText: 'OK',
      });

      const response = await client.get('/test');

      expect(response.data).toEqual(mockData);
      expect(response.status).toBe(200);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseURL}/test`,
        expect.objectContaining({
          method: 'GET',
        })
      );
    });
  });

  describe('post', () => {
    it('should make POST request successfully', async () => {
      const mockData = { id: 1, name: 'Test' };
      const postData = { name: 'Test' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
        status: 201,
        statusText: 'Created',
      });

      const response = await client.post('/test', postData);

      expect(response.data).toEqual(mockData);
      expect(response.status).toBe(201);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseURL}/test`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(postData),
        })
      );
    });
  });

  describe('put', () => {
    it('should make PUT request successfully', async () => {
      const mockData = { id: 1, name: 'Updated' };
      const putData = { name: 'Updated' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
        status: 200,
        statusText: 'OK',
      });

      const response = await client.put('/test/1', putData);

      expect(response.data).toEqual(mockData);
      expect(response.status).toBe(200);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseURL}/test/1`,
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(putData),
        })
      );
    });
  });

  describe('delete', () => {
    it('should make DELETE request successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({ success: true }),
        status: 204,
        statusText: 'No Content',
      });

      const response = await client.delete('/test/1');

      expect(response.status).toBe(204);
      expect(global.fetch).toHaveBeenCalledWith(
        `${baseURL}/test/1`,
        expect.objectContaining({
          method: 'DELETE',
        })
      );
    });
  });

  describe('error handling', () => {
    it('should throw error for failed request', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(client.get('/test')).rejects.toThrow('HTTP 404: Not Found');
    });

    it('should handle network errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(client.get('/test')).rejects.toThrow('Network error');
    });

    it('should clear timeout on error', async () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

      await expect(client.get('/test')).rejects.toThrow('Fetch failed');
      expect(clearTimeoutSpy).toHaveBeenCalled();

      clearTimeoutSpy.mockRestore();
    });
  });

  describe('request method', () => {
    it('should handle custom headers', async () => {
      const mockData = { success: true };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
        status: 200,
        statusText: 'OK',
      });

      await client.request('/test', {
        headers: { 'X-Custom-Header': 'value' },
      });

      expect(global.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          headers: expect.objectContaining({
            'X-Custom-Header': 'value',
          }),
        })
      );
    });

    it('should handle PATCH method', async () => {
      const mockData = { updated: true };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
        status: 200,
        statusText: 'OK',
      });

      await client.request('/test', {
        method: 'PATCH',
        body: { field: 'value' },
      });

      expect(global.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: 'PATCH',
          body: JSON.stringify({ field: 'value' }),
        })
      );
    });
  });
});

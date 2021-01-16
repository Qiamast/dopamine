import * as assert from 'assert';
import { IndexablePath } from './indexable-path';

describe('FolderPathInfo', () => {
    describe('constructor', () => {
        it('should set path', () => {
            // Arrange

            // Act
            const indexablePath: IndexablePath = new IndexablePath('/home/user/Music/Track.mp3', 123456789, 1);

            // Assert
            assert.strictEqual(indexablePath.path, '/home/user/Music/Track.mp3');
        });

        it('should set dateModifiedTicks', () => {
            // Arrange

            // Act
            const indexablePath: IndexablePath = new IndexablePath('/home/user/Music/Track.mp3', 123456789, 1);

            // Assert
            assert.strictEqual(indexablePath.dateModifiedTicks, 123456789);
        });

        it('should set folderId', () => {
            // Arrange

            // Act
            const indexablePath: IndexablePath = new IndexablePath('/home/user/Music/Track.mp3', 123456789, 1);

            // Assert
            assert.strictEqual(indexablePath.folderId, 1);
        });
    });
});
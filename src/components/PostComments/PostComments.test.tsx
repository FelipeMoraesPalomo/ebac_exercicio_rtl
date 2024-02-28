import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentarios', () => {
        render(<Post/>)

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Primeiro comentario',
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getByText('Primeiro comentario')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentario',
            }
        })

        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getByText('Segundo comentario')).toBeInTheDocument()
    });

})
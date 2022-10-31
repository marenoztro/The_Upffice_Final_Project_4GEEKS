"""empty message

Revision ID: 33a2c1a70d9f
Revises: 
Create Date: 2022-10-29 03:47:04.389856
=======


"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '33a2c1a70d9f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('spaces',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('location', sa.String(length=120), nullable=False),
    sa.Column('space_type', sa.String(length=120), nullable=True),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.Column('amenities', sa.String(length=200), nullable=True),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('images', sa.String(length=400), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('myspaces',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('space_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['space_id'], ['spaces.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('message', sa.String(length=1000), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('space_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['space_id'], ['spaces.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('message')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('myspaces')
    op.drop_table('spaces')
    op.drop_table('user')
    # ### end Alembic commands ###
